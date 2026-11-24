using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Skribble.Core.Hooks;
using Skribble.Core.Models;

namespace Skribble.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
