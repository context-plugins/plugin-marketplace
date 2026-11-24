using System.Collections.Generic;
using System.Net.Http;
using CircleCi.Core.Authentication;
using CircleCi.Core.Request;

namespace CircleCi.Core.Models;

internal sealed class ApiRequest
{
    public UrlTemplate UrlTemplate { get; }
    public IReadOnlyCollection<TemplateParam> TemplateParameters { get; }
    public IReadOnlyCollection<Param> QueryParameters { get; }
    public IReadOnlyCollection<HeaderParam> HeaderParameters { get; }
    public HttpMethod HttpMethod { get; }
    public IRequest Request { get; }
    public IAuthScheme Auth { get; }

    public ApiRequest(UrlTemplate urlTemplate,
        IReadOnlyCollection<TemplateParam> templateParameters,
        IReadOnlyCollection<Param> queryParameters,
        IReadOnlyCollection<HeaderParam> headerParameters,
        HttpMethod httpMethod,
        IRequest request,
        IAuthScheme auth)
    {
        UrlTemplate = urlTemplate;
        TemplateParameters = templateParameters;
        QueryParameters = queryParameters;
        HeaderParameters = headerParameters;
        HttpMethod = httpMethod;
        Request = request;
        Auth = auth;
    }
}
