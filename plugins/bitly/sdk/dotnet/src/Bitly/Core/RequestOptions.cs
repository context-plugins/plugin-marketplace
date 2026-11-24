using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Bitly.Core.Hooks;
using Bitly.Core.Models;

namespace Bitly.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
