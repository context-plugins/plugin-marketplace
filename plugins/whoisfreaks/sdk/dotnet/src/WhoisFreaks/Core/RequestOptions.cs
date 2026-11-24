using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using WhoisFreaks.Core.Hooks;
using WhoisFreaks.Core.Models;

namespace WhoisFreaks.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
