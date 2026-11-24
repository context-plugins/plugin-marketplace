using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using OddsRelay.Core.Hooks;
using OddsRelay.Core.Models;

namespace OddsRelay.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
