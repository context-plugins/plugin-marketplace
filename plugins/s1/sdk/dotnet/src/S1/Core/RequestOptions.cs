using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using S1.Core.Hooks;
using S1.Core.Models;

namespace S1.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
