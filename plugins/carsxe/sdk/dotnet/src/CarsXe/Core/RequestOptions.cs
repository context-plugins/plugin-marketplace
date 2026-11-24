using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using CarsXe.Core.Hooks;
using CarsXe.Core.Models;

namespace CarsXe.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
