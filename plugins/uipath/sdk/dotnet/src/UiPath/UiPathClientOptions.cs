using System;
using System.Collections.Generic;
using UiPath.Core.Authentication;
using UiPath.Core.Configuration;
using UiPath.Core.Hooks;
using UiPath.Servers;

namespace UiPath;

public class UiPathClientOptions
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
    /// OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Platform Management API scopes include PM.Users, PM.Groups, PM.Audit, PM.License, and their read-only variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Credentials can also be provided using App ID and App Secret for non-RPA integrations., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Credentials can also be provided using App ID and App Secret for non-RPA integrations., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Credentials can also be provided using App ID and App Secret for non-RPA integrations., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Data Service scopes include DataService.Data and DataService.Data.Read. Tokens are valid for one hour; refresh tokens are supported., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Credentials can also be provided using App ID and App Secret for non-RPA integrations., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Platform Management API scopes include PM.Users, PM.Groups, PM.Audit, PM.License, and their read-only variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Platform Management API scopes include PM.Users, PM.Groups, PM.Audit, PM.License, and their read-only variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Test Manager API scopes include TM.Projects, TM.TestCases, TM.TestSets, TM.Requirements, and their read-only variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Test Manager API scopes include TM.Projects, TM.TestCases, TM.TestSets, TM.Requirements, and their read-only variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Test Manager API scopes include TM.Projects, TM.TestCases, TM.TestSets, TM.Requirements, and their read-only variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Test Manager API scopes include TM.Projects, TM.TestCases, TM.TestSets, TM.Requirements, and their read-only variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Test Manager API scopes include TM.Projects, TM.TestCases, TM.TestSets, TM.Requirements, and their read-only variants., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Credentials can also be provided using App ID and App Secret for non-RPA integrations., OAuth 2.0 Bearer token obtained from the UiPath Identity Server. Use the client credentials or authorization code flow to obtain a token with the required Orchestrator scopes.
    /// </summary>
    public string? BearerAuth { get; set; }
    public CredentialProvider<string>? BearerAuthProvider { get; set; }
    /// <summary>
    /// API token generated from the Automation Hub Admin Console under Platform Setup &gt; Open API. Include as a Bearer token in the Authorization header: "Bearer {token}".
    /// </summary>
    public string? ApiKeyAuth { get; set; }
    public CredentialProvider<string>? ApiKeyAuthProvider { get; set; }
}
