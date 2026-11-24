using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Givebutter.Core.Hooks;
using Givebutter.Core.Models;

namespace Givebutter.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
