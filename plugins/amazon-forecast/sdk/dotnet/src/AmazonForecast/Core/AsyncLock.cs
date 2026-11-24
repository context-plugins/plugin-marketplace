using System;
using System.Threading;
using System.Threading.Tasks;

namespace AmazonForecast.Core;

internal sealed class AsyncLock
{
    private readonly SemaphoreSlim _semaphore = new(1, 1);

    public async Task<IDisposable> LockAsync(CancellationToken ct = default)
    {
        await _semaphore.WaitAsync(ct).ConfigureAwait(false);
        return new Releaser(_semaphore);
    }

    private sealed class Releaser : IDisposable
    {
        private readonly SemaphoreSlim _semaphore;
        private int _disposed;

        public Releaser(SemaphoreSlim semaphore)
            => _semaphore = semaphore;

        public void Dispose()
        {
            if (Interlocked.Exchange(ref _disposed, 1) == 0)
                _semaphore.Release();
        }
    }
}
