using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AlphaAi.Core.Hooks;
using AlphaAi.Core.Models;

namespace AlphaAi.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
