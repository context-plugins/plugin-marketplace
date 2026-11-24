using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using DidLogic.Core.Hooks;
using DidLogic.Core.Models;

namespace DidLogic.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
