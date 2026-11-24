using System;

namespace Fillo.Core.Exceptions;

public class SdkConnectionException(string message, Exception? innerException = null)
    : SdkException(message, innerException);
