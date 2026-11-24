using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AppstoreSpy.Core.Hooks;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
