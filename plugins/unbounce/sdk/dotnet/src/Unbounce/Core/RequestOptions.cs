using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Unbounce.Core.Hooks;
using Unbounce.Core.Models;

namespace Unbounce.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
