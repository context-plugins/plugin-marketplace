using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using HealthGorilla.Core.Hooks;
using HealthGorilla.Core.Models;

namespace HealthGorilla.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
