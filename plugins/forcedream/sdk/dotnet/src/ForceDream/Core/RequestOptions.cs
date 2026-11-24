using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using ForceDream.Core.Hooks;
using ForceDream.Core.Models;

namespace ForceDream.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
