using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleSearchConsole.Core.Hooks;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
