using System;
using System.Collections.Generic;
using Rendex.Core.Models;

namespace Rendex.Core;

internal sealed class UriFactory
{
    private readonly QueryParameterFactory _factory;
    private readonly TemplateParamsFactory _templateParamsFactory;

    public UriFactory(QueryParameterFactory factory, TemplateParamsFactory templateParamsFactory)
    {
        _factory = factory;
        _templateParamsFactory = templateParamsFactory;
    }

    public Uri Create(UrlTemplate urlTemplate, IReadOnlyCollection<Param> queryParameters,
        IReadOnlyCollection<TemplateParam> templateParams)
    {
        var hostPath = _templateParamsFactory.Create(urlTemplate, templateParams);

        var queryString = _factory.Serialize(queryParameters);
        var separator = hostPath.IndexOf('?') < 0 ? '?' : '&';

        return queryString.Length == 0
            ? new Uri(hostPath)
            : new Uri($"{hostPath}{separator}{queryString}");
    }
}
