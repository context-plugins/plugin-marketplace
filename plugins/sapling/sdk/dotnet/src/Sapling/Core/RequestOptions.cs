using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Sapling.Core.Hooks;
using Sapling.Core.Models;

namespace Sapling.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
