using System;
using Microsoft.Extensions.Logging;

namespace PlinthUsGrantsData.Core.Logging;

internal sealed class ConsoleErrorLoggerFactory : ILoggerFactory
{
    private readonly LogLevel _minLevel;

    public ConsoleErrorLoggerFactory(LogLevel minLevel) => _minLevel = minLevel;

    public ILogger CreateLogger(string categoryName) => new ConsoleErrorLogger(categoryName, _minLevel);

    public void AddProvider(ILoggerProvider provider) { }

    public void Dispose() { }
}

internal sealed class ConsoleErrorLogger : ILogger
{
    private readonly string _category;
    private readonly LogLevel _minLevel;

    public ConsoleErrorLogger(string category, LogLevel minLevel)
    {
        _category = category;
        _minLevel = minLevel;
    }

    public IDisposable BeginScope<TState>(TState state)
        where TState : notnull => NullScope.Instance;

    public bool IsEnabled(LogLevel logLevel) => logLevel >= _minLevel && logLevel != LogLevel.None;

    public void Log<TState>(
        LogLevel logLevel,
        EventId eventId,
        TState state,
        Exception? exception,
        Func<TState, Exception?, string> formatter)
    {
        if (!IsEnabled(logLevel))
            return;

        var message = formatter(state, exception);
        if (message is null or "" && exception is null)
            return;

        var line = $"[{Abbreviate(logLevel)}] {_category}: {message}";
        if (exception is not null)
            line += Environment.NewLine + exception;

        Console.Error.WriteLine(line);
    }

    private static string Abbreviate(LogLevel level) => level switch
    {
        LogLevel.Trace => "trce",
        LogLevel.Debug => "dbug",
        LogLevel.Information => "info",
        LogLevel.Warning => "warn",
        LogLevel.Error => "fail",
        LogLevel.Critical => "crit",
        _ => "none",
    };

    private sealed class NullScope : IDisposable
    {
        public static NullScope Instance { get; } = new();
        private NullScope() { }
        public void Dispose() { }
    }
}
