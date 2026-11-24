using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using BetterStack.Core.Hooks;
using BetterStack.Core.Models;

namespace BetterStack.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
