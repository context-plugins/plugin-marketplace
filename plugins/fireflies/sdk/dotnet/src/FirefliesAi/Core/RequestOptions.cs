using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using FirefliesAi.Core.Hooks;
using FirefliesAi.Core.Models;

namespace FirefliesAi.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
