using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using NordicFinancialNews.Core.Hooks;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
