"""The host environment this SDK reports in its identification headers.

Two values, both constant for the life of the process: the operating system with its architecture,
and the Python implementation with its version. They are probed once at import rather than per
request -- neither can change while the process runs, and a request-path probe would pay for that
certainty on every call.

The architecture is reported exactly as the host spells it. ``platform.machine()`` is what the
machine answered, so the header is ground truth for the host that sent it, and no table here can
fall behind an architecture that ships after this SDK does. A consumer comparing hosts across
operating systems folds the spellings on its own side -- ``AMD64`` and ``x86_64`` are one machine
described by two kernels, and only the collector knows which spellings it wants joined.

Every probe is guarded. These values are computed while the package is being imported, so an
unhandled failure here would not degrade a header, it would stop the SDK from importing at all."""

from __future__ import annotations

import platform
from typing import Final


def _operating_system() -> str:
    """Return the host OS, its release and its architecture, or ``unknown`` if a probe fails."""
    try:
        return f"{platform.system()} {platform.release()} {platform.machine()}".strip()
    except Exception:
        return "unknown"


def _python_runtime() -> str:
    """Return the interpreter and its version, or ``unknown`` if a probe fails."""
    try:
        return f"{platform.python_implementation()} {platform.python_version()}"
    except Exception:
        return "unknown"


OPERATING_SYSTEM: Final = _operating_system()
"""The host OS, its release and its architecture -- ``Windows 11 AMD64``, ``Darwin 23.5.0 arm64``."""

PYTHON_RUNTIME: Final = _python_runtime()
"""The interpreter and its version -- ``CPython 3.13.14``, ``PyPy 3.10.14``."""
