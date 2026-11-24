namespace Semrush.Core.Models;

internal readonly record struct UrlTemplate(string BaseUrl, string Path, TemplateParam[] Variables);
