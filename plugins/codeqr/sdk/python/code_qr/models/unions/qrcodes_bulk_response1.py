from __future__ import annotations

from typing import TypeAlias

from ..qr_code import QrCode, QrCodeDict
from ..qr_code_error import QrCodeError, QrCodeErrorDict

QrcodesBulkResponse1: TypeAlias = QrCode | QrCodeError

QrcodesBulkResponse1Dict: TypeAlias = QrCodeDict | QrCodeErrorDict
