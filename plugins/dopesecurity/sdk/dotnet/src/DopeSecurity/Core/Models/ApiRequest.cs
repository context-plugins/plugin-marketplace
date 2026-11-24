using System.Collections.Generic;
using System.Net.Http;
using DopeSecurity.Core.Authentication;
using DopeSecurity.Core.Request;

namespace DopeSecurity.Core.Models;

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
