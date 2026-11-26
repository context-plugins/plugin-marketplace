using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Bill.Core.Hooks;
using Bill.Core.Models;

namespace Bill.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
