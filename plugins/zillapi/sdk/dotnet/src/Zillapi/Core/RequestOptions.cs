using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Zillapi.Core.Hooks;
using Zillapi.Core.Models;

namespace Zillapi.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
