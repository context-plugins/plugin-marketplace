using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using RocketReach.Core.Hooks;
using RocketReach.Core.Models;

namespace RocketReach.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
