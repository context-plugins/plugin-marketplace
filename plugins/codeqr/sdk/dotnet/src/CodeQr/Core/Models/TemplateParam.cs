namespace CodeQr.Core.Models;

internal readonly record struct TemplateParam(string Key, object? Value)
{
    public static TemplateParam ForServer(string key, string value) => new(key, value);
}
