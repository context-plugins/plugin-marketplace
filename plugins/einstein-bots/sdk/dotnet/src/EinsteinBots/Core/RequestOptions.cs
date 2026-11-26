using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using EinsteinBots.Core.Hooks;
using EinsteinBots.Core.Models;

namespace EinsteinBots.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
