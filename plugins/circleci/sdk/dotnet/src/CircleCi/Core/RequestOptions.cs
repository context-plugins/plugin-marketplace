using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using CircleCi.Core.Hooks;
using CircleCi.Core.Models;

namespace CircleCi.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
