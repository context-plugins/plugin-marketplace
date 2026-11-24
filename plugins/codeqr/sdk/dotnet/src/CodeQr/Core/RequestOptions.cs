using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using CodeQr.Core.Hooks;
using CodeQr.Core.Models;

namespace CodeQr.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
