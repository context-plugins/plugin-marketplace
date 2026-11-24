namespace Hightouch.Core.Models;

internal readonly record struct MultipartParam(
    string? Key,
    object? Value,
    string? ContentType = null)
{
    public MultipartParam(object? value) : this(null, value) { }
}
