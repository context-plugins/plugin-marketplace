using System;
using System.Collections.Generic;
using System.Linq;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Core;

internal sealed class TemplateParamsFactory
{
    private readonly IReadOnlyCollection<TemplateParam> _defaultParams;

    public TemplateParamsFactory(IReadOnlyCollection<TemplateParam> defaultParams) => _defaultParams = defaultParams;

    public string Create(UrlTemplate urlTemplate, IReadOnlyCollection<TemplateParam> templateParams)
    {
        var baseUrl = ExpandTemplate(urlTemplate.BaseUrl, urlTemplate.Variables);
        var path = ExpandTemplate(urlTemplate.Path, templateParams.Concat(_defaultParams));
        return $"{baseUrl.TrimEnd('/')}/{path.TrimStart('/')}";
    }

    private static string ExpandTemplate(string template, IEnumerable<TemplateParam> parameters)
    {
        foreach (var (key, value) in parameters)
        {
            var replacement = string.Join(",", ParameterFlattener.Flatten(value).Select(Uri.EscapeDataString));
            template = template.Replace($"{{{key}}}", replacement);
        }

        return template;
    }
}
