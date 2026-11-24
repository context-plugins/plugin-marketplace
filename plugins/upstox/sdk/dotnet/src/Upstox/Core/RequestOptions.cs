using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Upstox.Core.Hooks;
using Upstox.Core.Models;

namespace Upstox.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
