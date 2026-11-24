using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using JuriSign.Core.Hooks;
using JuriSign.Core.Models;

namespace JuriSign.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
