const { render, screen } = require("@testing-library/react")
import GifItem from "../../components/GifItem"

const title = 'Lady Gaga'
const url = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW1ncWdoaHFkMXdvMWJjZXRrOHdkNjlqNDZpanduYnY4MXNjeGtlOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TjGFDxbbZRYjv9vpCL/giphy.gif'

describe('Testing GifItem', () => {
    test('should match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('should display the image with the url', () => {
        render(<GifItem title={title} url={url} />)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('should display the title', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })
})