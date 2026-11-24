using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Rendex.Core.Hooks;
using Rendex.Core.Models;

namespace Rendex.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
