using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using DopeSecurity.Core.Hooks;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
