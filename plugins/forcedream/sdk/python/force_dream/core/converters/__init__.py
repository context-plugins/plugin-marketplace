"""Wire-format converters a generated model names in its annotations.

A datetime/date field names one of the four ``Annotated`` aliases -- ``RFC3339DateTime``,
``RFC1123DateTime``, ``UnixSecondsDateTime``, ``Date``. A binary value declares two facts instead of
one, its RFC 4648 alphabet and the charset that renders it: a **model property** states both as
arguments to :func:`ByteField`, beside its wire key, while an **endpoint** names one of the twenty
``Base64AsciiEncodedBytes``-style aliases in a subscript, as every other parameter does. An open enum
field pairs its type with :func:`open_enum_validator`. The bare parse/dump pairs that build the
aliases stay internal to their modules."""

from .date_time import Date, RFC1123DateTime, RFC3339DateTime, UnixSecondsDateTime
from .encoded_bytes import (
    Base16AsciiEncodedBytes,
    Base16Cp1252EncodedBytes,
    Base16Latin1EncodedBytes,
    Base16Utf8EncodedBytes,
    Base32AsciiEncodedBytes,
    Base32Cp1252EncodedBytes,
    Base32HexAsciiEncodedBytes,
    Base32HexCp1252EncodedBytes,
    Base32HexLatin1EncodedBytes,
    Base32HexUtf8EncodedBytes,
    Base32Latin1EncodedBytes,
    Base32Utf8EncodedBytes,
    Base64AsciiEncodedBytes,
    Base64Cp1252EncodedBytes,
    Base64Latin1EncodedBytes,
    Base64UrlAsciiEncodedBytes,
    Base64UrlCp1252EncodedBytes,
    Base64UrlLatin1EncodedBytes,
    Base64UrlUtf8EncodedBytes,
    Base64Utf8EncodedBytes,
    ByteField,
)
from .open_enum import open_enum_validator

__all__ = [
    # Wire-format datetime/date aliases
    "Date",
    "RFC3339DateTime",
    "RFC1123DateTime",
    "UnixSecondsDateTime",
    # Wire-format binary aliases -- one per (RFC 4648 alphabet, charset) pair
    "Base64AsciiEncodedBytes",
    "Base64Utf8EncodedBytes",
    "Base64Latin1EncodedBytes",
    "Base64Cp1252EncodedBytes",
    "Base64UrlAsciiEncodedBytes",
    "Base64UrlUtf8EncodedBytes",
    "Base64UrlLatin1EncodedBytes",
    "Base64UrlCp1252EncodedBytes",
    "Base32AsciiEncodedBytes",
    "Base32Utf8EncodedBytes",
    "Base32Latin1EncodedBytes",
    "Base32Cp1252EncodedBytes",
    "Base32HexAsciiEncodedBytes",
    "Base32HexUtf8EncodedBytes",
    "Base32HexLatin1EncodedBytes",
    "Base32HexCp1252EncodedBytes",
    "Base16AsciiEncodedBytes",
    "Base16Utf8EncodedBytes",
    "Base16Latin1EncodedBytes",
    "Base16Cp1252EncodedBytes",
    # Binary property declaration
    "ByteField",
    # Open enums
    "open_enum_validator",
]
