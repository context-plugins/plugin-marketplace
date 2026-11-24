using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleAnalytics.Core.Hooks;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
