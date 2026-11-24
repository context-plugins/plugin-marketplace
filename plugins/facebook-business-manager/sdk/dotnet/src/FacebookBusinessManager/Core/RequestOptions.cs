using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using FacebookBusinessManager.Core.Hooks;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
