using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AgentReady.Core.Hooks;
using AgentReady.Core.Models;

namespace AgentReady.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
