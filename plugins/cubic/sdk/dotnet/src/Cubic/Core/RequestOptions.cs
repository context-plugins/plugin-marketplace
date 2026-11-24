using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Cubic.Core.Hooks;
using Cubic.Core.Models;

namespace Cubic.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
