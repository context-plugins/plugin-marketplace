using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using MrScraper.Core.Hooks;
using MrScraper.Core.Models;

namespace MrScraper.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
