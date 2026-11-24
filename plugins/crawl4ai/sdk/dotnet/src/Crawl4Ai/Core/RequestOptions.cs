using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Crawl4Ai.Core.Hooks;
using Crawl4Ai.Core.Models;

namespace Crawl4Ai.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
