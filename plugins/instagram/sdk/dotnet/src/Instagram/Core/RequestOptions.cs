using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Instagram.Core.Hooks;
using Instagram.Core.Models;

namespace Instagram.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
