using System;
using System.Collections.Generic;
using SalesforceServiceCloud.Core.Authentication;
using SalesforceServiceCloud.Core.Authentication.OAuth2.AuthorizationCode;
using SalesforceServiceCloud.Core.Configuration;
using SalesforceServiceCloud.Core.Hooks;
using SalesforceServiceCloud.Servers;

namespace SalesforceServiceCloud;

public class SalesforceServiceCloudClientOptions
{
    public ServerEnvironment Environment { get; set; } = ServerEnvironment.Default();
    public RetryOptions Retry { get; set; } = RetryOptions.Default();
    public LoggingOptions Logging { get; set; } = new();
    public TimeProvider TimeProvider { get; set; } = TimeProvider.System;
    public ServerOptions Server { get; set; } = new();
    /// <summary>
    /// Maximum time to wait for the next frame of a streaming (SSE) response before the stream is
    /// torn down with a timeout. Bounds only the wait for the server between frames, never the
    /// caller's own processing time. Set to null to wait indefinitely.
    /// </summary>
    public TimeSpan? StreamReadTimeout { get; set; } = TimeSpan.FromSeconds(60);
    public IReadOnlyList<SdkHook> Hooks { get; set; } = [];
    /// <summary>
    /// chatbotAuth supports authorization code and implicit Oauth flows.
    /// </summary>
    public OAuth2AuthorizationCodeCredentials? ChatbotAuthAuthorizationCode { get; set; }
    /// <summary>
    /// chatbotAuth supports authorization code and implicit Oauth flows.
    /// </summary>
    public string? ChatbotAuthImplicit { get; set; }
    public CredentialProvider<string>? ChatbotAuthImplicitProvider { get; set; }
    /// <summary>
    /// Salesforce OAuth access token obtained using the JWT Bearer flow. Use the <c>chatbot_api</c> scope with this flow to enable access to the Einstein Bots services.
    /// </summary>
    public string? JwtBearer { get; set; }
    public CredentialProvider<string>? JwtBearerProvider { get; set; }
}
