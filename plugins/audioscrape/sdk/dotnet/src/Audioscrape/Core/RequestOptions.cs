using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Audioscrape.Core.Hooks;
using Audioscrape.Core.Models;

namespace Audioscrape.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
