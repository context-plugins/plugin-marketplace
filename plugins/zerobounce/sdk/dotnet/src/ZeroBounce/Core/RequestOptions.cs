using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using ZeroBounce.Core.Hooks;
using ZeroBounce.Core.Models;

namespace ZeroBounce.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
