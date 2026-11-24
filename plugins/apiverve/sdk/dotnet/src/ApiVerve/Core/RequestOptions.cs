using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using ApiVerve.Core.Hooks;
using ApiVerve.Core.Models;

namespace ApiVerve.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
