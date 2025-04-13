export class HttpError extends Error {
  constructor(
    public statusCode: number,
    override message: string,
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}