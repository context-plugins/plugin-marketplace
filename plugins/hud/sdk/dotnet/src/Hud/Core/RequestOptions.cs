using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Hud.Core.Hooks;
using Hud.Core.Models;

namespace Hud.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
