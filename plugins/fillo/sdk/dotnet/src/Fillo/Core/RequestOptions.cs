using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Fillo.Core.Hooks;
using Fillo.Core.Models;

namespace Fillo.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
